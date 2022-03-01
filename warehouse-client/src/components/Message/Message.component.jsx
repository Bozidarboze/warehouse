import Alert from "@mui/material/Alert";

const Message = ({ message, type, sticky }) => {
  return (
    <>
      {sticky ? (
        <Alert data-aos='fade-down' severity={type} sx={{ position: "sticky", top: 0, zIndex: 10 }}>
          {message}
        </Alert>
      ) : (
        <Alert data-aos='fade' severity={type}>
          {message}
        </Alert>
      )}
    </>
  );
};

export default Message;
