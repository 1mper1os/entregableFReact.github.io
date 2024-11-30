import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import SignInwithGoogle from "./signInWIthGoogle";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.warn("Por favor, complete todos los campos.", {
        position: "top-center",
      });
      return;
    }

    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Inicio de sesión exitoso", {
        position: "top-center",
      });
      navigate("/Dashboard");
    } catch (error) {
      console.error("Error de inicio de sesión:", error.message);
      if (error.code === "auth/user-not-found") {
        toast.error("Usuario no encontrado. Por favor, regístrese.", {
          position: "bottom-center",
        });
      } else if (error.code === "auth/wrong-password") {
        toast.error("Contraseña incorrecta.", {
          position: "bottom-center",
        });
      } else {
        toast.error("Error en el inicio de sesión. Inténtelo de nuevo.", {
          position: "bottom-center",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form class="log" onSubmit={handleSubmit}>
      <h3>Inicio de Sesión</h3>

      <div className="mb-3">
        <label>Correo</label>
        <input
          type="email"
          className="form-control"
          placeholder="Ingrese el correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />
      </div>

      <div className="mb-3">
        <label>Contraseña</label>
        <input
          type="password"
          className="form-control"
          placeholder="Ingrese la contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
        />
      </div>

      <div className="d-grid">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={loading}
        >
          {loading ? "Ingresando..." : "Ingresar"}
        </button>
      </div>
      <p className="forgot-password text-right">
        ¿Nuevo Usuario? <a href="/register">¡Regístrate aquí!</a>
      </p>
      <div className="text-center mt-3">
        <SignInwithGoogle />
      </div>
    </form>
  );
}

export default Login;

