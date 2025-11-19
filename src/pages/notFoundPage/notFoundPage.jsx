import { Link } from "react-router-dom";
import "./notFoundPage.scss";
import PageWrapper from "../../components/animation/pageWrapper/pageWrapper";

export default function NotFoundPage() {
  return (
    <PageWrapper>
      <div className="not-found-page">
        <div className="not-found-content">
          <h1 className="not-found-title">404</h1>
          <h2 className="not-found-subtitle">Page Not Found</h2>
          <p className="not-found-text">
            Sorry, the page you're looking for doesn't exist.
          </p>
          <Link to="/" className="not-found-link">
            Go Back Home
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}

