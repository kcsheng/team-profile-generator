const writeHTML = (team) => {
  let memberCards = ``;
  team.members.forEach((member) => {
    const role = member.position;
    const roleCap = role.charAt(0).toUpperCase() + role.slice(1);
    const uniqueKey = Object.keys(member)[4];
    const uniqueVal = member[uniqueKey];
    const uniqueLink =
      uniqueKey === `github`
        ? `<a href="https://www.github.com/${uniqueVal} target="_blank">${uniqueVal}</a>`
        : uniqueVal;

    const roleIcon =
      member.position === "manager"
        ? `<i class="fas fa-user-astronaut fa-2x"></i>`
        : member.position === "engineer"
        ? `<i class="fas fa-user-secret fa-2x"></i>`
        : `<i class="fas fa-user-graduate fa-2x"></i>`;

    memberCards += `
        <div class="member-card">
          <div class="name"><h2>${member.name}</h2></div>
          <div class="position"><h3>${roleIcon}${roleCap}</h3></div>
          <div class="info">
            <div class="id">ID: ${member.id}</div>
            <div class="email">Email: <a href="mailto:${member.email}">${member.email}</a></div>
            <div class="extra-prop">${uniqueKey}: ${uniqueLink}</div>
          </div>
        </div>
    `;
  });

  const finalLayout = `
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script src="https://kit.fontawesome.com/3b6c858269.js" crossorigin="anonymous"></script>
      <link rel="stylesheet" href="./assets/css/reset.css">
      <link rel="stylesheet" href="./assets/css/style.css">
      <title>Team Profile</title>
    </head>
    <body>
      <h1>My Team</h1>
      <div class="member-cards">  
        ${memberCards}
      </div>
    </body>
    </html>
  `;
  return finalLayout;
};

module.exports = writeHTML;
