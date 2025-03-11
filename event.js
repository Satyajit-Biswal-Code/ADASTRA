function scrollToEvent() {
  const select = document.getElementById("event");
  const value = select.value;
  if (value === "deathrace") {
    document.getElementById("Deathrace").scrollIntoView({ behavior: "smooth" });
  } else if (value === "robosumo") {
    document.getElementById("RoboSumo").scrollIntoView({ behavior: "smooth" });
  } else if (value === "robosoccer") {
    document.getElementById("RoboSoccer").scrollIntoView({ behavior: "smooth" });
  }else if (value === "droneleague") {
    document.getElementById("Droneleague").scrollIntoView({ behavior: "smooth" });
  }  else if (value === "linefollower") {
    document.getElementById("Linefollower").scrollIntoView({ behavior: "smooth" });
  } else if (value === "hackathon") {
    document.getElementById("Hackathon").scrollIntoView({ behavior: "smooth" });
  } else if (value === "codathon") {
    document.getElementById("Codathon").scrollIntoView({ behavior: "smooth" });
  }
}
