import { Container, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Container data-aos='fade' sx={{ display: "flex", height: "85vh", justifyContent: "center", alignItems: "center" }}>
      <CircularProgress color='secondary' size={200} />
    </Container>
  );
};

export default Loader;
