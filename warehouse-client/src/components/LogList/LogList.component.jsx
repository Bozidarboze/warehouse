import { Paper, Typography, Table, TableHead, TableRow, TableCell, TableContainer } from "@mui/material";
import { useEffect, useState } from "react";
import LogCard from "../LogCard/LogCard.component";

const LogList = ({ logs }) => {
  const [logsToLoad, setLogsToLoad] = useState(20);

  const filteredLogs = logs.filter((log, idx) => idx < logsToLoad);

  const scroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
      setLogsToLoad((logsToLoad) => logsToLoad + 10);
    }
  };

  useEffect(() => {
    logsToLoad < logs.length && window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
    // eslint-disable-next-line
  }, []);

  return (
    <Paper className='shop-list' elevation={0} sx={{ my: 5, borderRadius: "30px 30px 0 0" }}>
      <Typography variant='h1' align='center' color='#28234A' sx={{ mb: 5, py: 5, fontSize: "3.8rem" }}>
        Logs
      </Typography>
      <TableContainer elevation={0} component={Paper}>
        <Table>
          <TableHead sx={{ boxShadow: "0 0 4px rgb(0,0,0,0.2)" }}>
            <TableRow>
              <TableCell sx={{ color: "#28234A", fontWeight: "bold" }}>Location</TableCell>
              <TableCell sx={{ color: "#28234A", fontWeight: "bold" }}>Message</TableCell>
              <TableCell sx={{ color: "#28234A", fontWeight: "bold" }}>Date </TableCell>
            </TableRow>
          </TableHead>
          {filteredLogs.map(({ logId, ...otherProps }) => (
            <LogCard key={logId} {...otherProps} />
          ))}
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default LogList;
