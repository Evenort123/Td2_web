
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="page not-found">
      <h1>404</h1>
      <h2>Page introuvable !</h2>
      <p>Désolé, cette page n'existe pas.</p>

      <Link to="/" className="btn">
        Retour à l'accueil
      </Link>
    </div>
  );
}

export default NotFound;
