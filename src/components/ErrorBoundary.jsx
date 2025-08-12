import { useRouteError } from "react-router";

const ErrorBoundaries = () => {
  const err = useRouteError();
  return (
    <div className="error-boundary-container">
      <h2>oops!</h2>
      <h3>
        {err.status} {err.statusText}
      </h3>
    </div>
  );
};

export default ErrorBoundaries;
