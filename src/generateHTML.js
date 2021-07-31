const capitalise = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const writeHTML = (team) => {
  let memberCards = ``;
  team.members.forEach((member) => {
    const role = member.position;
    const roleCap = capitalise(role);
    const uniqueKey = Object.keys(member)[4];
    const uniqueKeyCap = capitalise(uniqueKey);
    const uniqueVal = member[uniqueKey];
    const uniqueLink =
      uniqueKey === `github`
        ? `<a href="https://www.github.com/${uniqueVal}" target="_blank">${uniqueVal}</a>`
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
            <div class="extra-prop">${uniqueKeyCap}: ${uniqueLink}</div>
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
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="./assets/css/reset.css">
      <link rel="stylesheet" href="./assets/css/style.css">
      <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="crossorigin="anonymous" referrerpolicy="no-referrer"/>
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

module.exports = { writeHTML, capitalise };
