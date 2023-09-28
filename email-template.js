const fs = require('fs');





// Step 1: Set up the data
const recipients = [
  { name: "Jane and Tim", link: "index.html?guest=Jane%20and%20Tim" },
  { name: "Chloe", link: "index.html?guest=Chloe" },
  { name: "Alice and Jack", link: "index.html?guest=Alice%20and%20Jack" },
  { name: "Oliver", link: "index.html?guest=Oliver" },
  { name: "Rebecca", link: "index.html?guest=Rebecca" },
  { name: "Elijah", link: "index.html?guest=Elijah" },
  { name: "Margie and Richard", link: "index.html?guest=Margie%20and%20Richard" },
  { name: "Cath and Michael", link: "index.html?guest=Cath%20and%20Michael" },
  { name: "Anthony and Rachel", link: "index.html?guest=Anthony%20and%20Rachel" },
  { name: "Anne", link: "index.html?guest=Anne" },
  { name: "Taylor and Sam", link: "index.html?guest=Taylor%20and%20Sam" },
  { name: "Jess and Peter", link: "index.html?guest=Jess%20and%20Peter" },
  { name: "Hayley and Nathan", link: "index.html?guest=Hayley%20and%20Nathan" },
  { name: "Bel and Tom", link: "index.html?guest=Bel%20and%20Tom" },
  { name: "Sophie and Siane", link: "index.html?guest=Sophie%20and%20Siane" },
  { name: "Kia", link: "index.html?guest=Kia" },
  { name: "Xander", link: "index.html?guest=Xander" },
  { name: "Winnie", link: "index.html?guest=Winnie" },
  { name: "Rose", link: "index.html?guest=Rose" },
  { name: "Jane and Kevin", link: "index.html?guest=Jane%20and%20Kevin" },
  { name: "Dave and Jane", link: "index.html?guest=Dave%20and%20Jane" },
  { name: "Matthew and Julie", link: "index.html?guest=Matthew%20and%20Julie" },
  { name: "Sarah", link: "index.html?guest=Sarah" },
  { name: "Kate", link: "index.html?guest=Kate" },
  { name: "Tony and Sophie", link: "index.html?guest=Tony%20and%20Sophie" },
  { name: "Pheobe", link: "index.html?guest=Pheobe" },
  { name: "Kate", link: "index.html?guest=Kate" },
  { name: "Jenny and John", link: "index.html?guest=Jenny%20and%20John" },
  { name: "Bridge and Kevin", link: "index.html?guest=Bridge%20and%20Kevin" },
  { name: "Lizzy and Tom and Teddy", link: "index.html?guest=Lizzy%20and%20Tom%20and%20Teddy" },
  { name: "Michael", link: "index.html?guest=Michael" },
  { name: "Mark and Maria", link: "index.html?guest=Mark%20and%20Maria" },
  { name: "Margaret and Steve", link: "index.html?guest=Margaret%20and%20Steve" },
  { name: "Damian, Alison, Will, and Joey", link: "index.html?guest=Damian,%20Alison,%20Will,%20and%20Joey" },
  { name: "Dan", link: "index.html?guest=Dan" },
  { name: "PBro", link: "index.html?guest=PBro" },
  { name: "Patto", link: "index.html?guest=Patto" },
  { name: "Healy", link: "index.html?guest=Healy" },
  { name: "Matt", link: "index.html?guest=Matt" },
  { name: "Lukush", link: "index.html?guest=Lukush" },
  { name: "Dave", link: "index.html?guest=Dave" },
  { name: "Ben and Talia", link: "index.html?guest=Ben%20and%20Talia" },
  { name: "Georgia", link: "index.html?guest=Georgia" },
  { name: "Tiffany", link: "index.html?guest=Tiffany" },
  { name: "Pete, Julia, and Ned", link: "index.html?guest=Pete,%20Julia,%20and%20Ned" },
  { name: "Graham and Arwel", link: "index.html?guest=Graham%20and%20Arwel" },
  { name: "Moose", link: "index.html?guest=Moose" },
  { name: "Shags", link: "index.html?guest=Shags" },
  { name: "Brad", link: "index.html?guest=Brad" },
  { name: "Knackers", link: "index.html?guest=Knackers" },
  { name: "Jamie", link: "index.html?guest=Jamie" },
  { name: "Todd and Tash", link: "index.html?guest=Todd%20and%20Tash" },
  { name: "Carsten", link: "index.html?guest=Carsten" },
  { name: "Adam Rynsaardt", link: "index.html?guest=Adam Rynsaardt" },
  { name: "Sue", link: "index.html?guest=Sue" },
  { name: "Theresa", link: "index.html?guest=Theresa" },
  { name: "Tom", link: "index.html?guest=Tom" }
];

// Step 2: Generate emails
const generateEmails = (recipients) => {
    return recipients.map(recipient => {
        return `
        ${recipient.name},

        We're getting married, and we'd love you to be there with us.

        Your invitation is here: ${recipient.link}.

        Love,   
        Lily & Pat
        `;
    });
}

// Step 3: Use the generated emails
const emails = generateEmails(recipients);
emails.forEach((email, index) => {
    console.log(`Email for ${recipients[index].name}:\n${email}\n`);
});



// Step 4: Write the generated emails to a file

let output = '';
emails.forEach((email, index) => {
  output += `Email for ${recipients[index].name}:\n${email}\n\n`;
});

fs.writeFile('generated-emails.txt', output, (err) => {
  if (err) throw err;
  console.log('The emails have been saved to generated-emails.txt!');
});



