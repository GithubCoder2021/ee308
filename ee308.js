
function normal(log) {
  if (log != Infinity) {
    if (log >= 1e21) {
      return "e" + log;
    } else if (log >= 6) {
      return (Math.round(10**(log - Math.floor(log))*1000))/1000 + "e" + Math.floor(log);
    } else if (log >= -Infinity) {
      return Math.floor(10 ** log);
    } else {
      return 0;
    }
  } else {
   return "Eternity";
  }
  
}
