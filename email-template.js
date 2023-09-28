const fs = require('fs');
const path = require('path'); // Required to build the path to your files



// Step 1: Set up the data
const recipients = [
  { name: "Jane and Tim", link: "?guest=Jane%20and%20Tim" },
  { name: "Chloe", link: "?guest=Chloe" },
  { name: "Alice and Jack", link: "?guest=Alice%20and%20Jack" },
  { name: "Oliver", link: "?guest=Oliver" },
  { name: "Rebecca", link: "?guest=Rebecca" },
  { name: "Elijah", link: "?guest=Elijah" },
  { name: "Margie and Richard", link: "?guest=Margie%20and%20Richard" },
  { name: "Cath and Michael", link: "?guest=Cath%20and%20Michael" },
  { name: "Anthony and Rachel", link: "?guest=Anthony%20and%20Rachel" },
  { name: "Anne", link: "?guest=Anne" },
  { name: "Taylor and Sam", link: "?guest=Taylor%20and%20Sam" },
  { name: "Jess and Peter", link: "?guest=Jess%20and%20Peter" },
  { name: "Hayley and Nathan", link: "?guest=Hayley%20and%20Nathan" },
  { name: "Bel and Tom", link: "?guest=Bel%20and%20Tom" },
  { name: "Sophie and Siane", link: "?guest=Sophie%20and%20Siane" },
  { name: "Kia", link: "?guest=Kia" },
  { name: "Xander", link: "?guest=Xander" },
  { name: "Winnie", link: "?guest=Winnie" },
  { name: "Rose", link: "?guest=Rose" },
  { name: "Jane and Kevin", link: "?guest=Jane%20and%20Kevin" },
  { name: "Dave and Jane", link: "?guest=Dave%20and%20Jane" },
  { name: "Matthew and Julie", link: "?guest=Matthew%20and%20Julie" },
  { name: "Sarah", link: "?guest=Sarah" },
  { name: "Kate", link: "?guest=Kate" },
  { name: "Tony and Sophie", link: "?guest=Tony%20and%20Sophie" },
  { name: "Pheobe", link: "?guest=Pheobe" },
  { name: "Kate", link: "?guest=Kate" },
  { name: "Jenny and John", link: "?guest=Jenny%20and%20John" },
  { name: "Bridge and Kevin", link: "?guest=Bridge%20and%20Kevin" },
  { name: "Lizzy and Tom and Teddy", link: "?guest=Lizzy%20and%20Tom%20and%20Teddy" },
  { name: "Michael", link: "?guest=Michael" },
  { name: "Mark and Maria", link: "?guest=Mark%20and%20Maria" },
  { name: "Margaret and Steve", link: "?guest=Margaret%20and%20Steve" },
  { name: "Damian, Alison, Will, and Joey", link: "?guest=Damian,%20Alison,%20Will,%20and%20Joey" },
  { name: "Dan", link: "?guest=Dan" },
  { name: "PBro", link: "?guest=PBro" },
  { name: "Patto", link: "?guest=Patto" },
  { name: "Healy", link: "?guest=Healy" },
  { name: "Matt", link: "?guest=Matt" },
  { name: "Lukush", link: "?guest=Lukush" },
  { name: "Dave", link: "?guest=Dave" },
  { name: "Ben and Talia", link: "?guest=Ben%20and%20Talia" },
  { name: "Georgia", link: "?guest=Georgia" },
  { name: "Tiffany", link: "?guest=Tiffany" },
  { name: "Pete, Julia, and Ned", link: "?guest=Pete,%20Julia,%20and%20Ned" },
  { name: "Graham and Arwel", link: "?guest=Graham%20and%20Arwel" },
  { name: "Moose", link: "?guest=Moose" },
  { name: "Shags", link: "?guest=Shags" },
  { name: "Brad", link: "?guest=Brad" },
  { name: "Knackers", link: "?guest=Knackers" },
  { name: "Jamie", link: "?guest=Jamie" },
  { name: "Todd and Tash", link: "?guest=Todd%20and%20Tash" },
  { name: "Carsten", link: "?guest=Carsten" },
  { name: "Adam", link: "?guest=Adam%20Rynsaardt" },
  { name: "Sue", link: "?guest=Sue" },
  { name: "Theresa", link: "?guest=Theresa" },
  { name: "Tom", link: "?guest=Tom" }
];

// Step 2: Generate emails
const generateEmails = (recipients) => {
    return recipients.map(recipient => {
        return `Dear ${recipient.name},

We're getting married, and we'd love you to be there with us.

Your invitation is here! https://lpwed.com/${recipient.link}

Love,   
Lily & Pat
        `;
    });
}

// Step 3: Use the generated emails
const emails = generateEmails(recipients);




// Step 4: Write the generated emails to individual files in the 'generated_emails' directory
emails.forEach((email, index) => {
  const filename = `${recipients[index].name.replace(/ /g, '_').replace(/&/g, 'and').replace(/,/g, '')}.txt`; // create a filename from the name
  const filepath = path.join(__dirname, 'generated_emails', filename); // path to the file

  fs.writeFile(filepath, email, (err) => {
    if (err) throw err;
    console.log(`The email for ${recipients[index].name} has been saved to ${filename}!`);
  });
});


