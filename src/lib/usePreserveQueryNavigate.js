import { useNavigate, useLocation } from 'react-router-dom';

export const usePreserveQueryNavigate = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (path) => {
    // Preserva os parâmetros de query da URL atual
    const currentParams = new URLSearchParams(location.search);
    const newPath = currentParams.toString() 
      ? `${path}?${currentParams.toString()}` 
      : path;
    navigate(newPath);
  };
};

