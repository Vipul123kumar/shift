 import man from"./man.png";
 import woman from "./women.png";
 
 const staffData= [
    {
      title: "Bar staff (2)",
      staff: [
        {
          name: "Carol Saragosa",
          role: "Waitress - 16h",
          logo:man,
          shifts: [
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },
            {},
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },
            { time: "Approved leave", hours: "All day", pay: "", type: "leave" },
            { time: "18:30-23:30", hours: "5h", pay: "$120", type: "evening" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },
            

          ],
        },
        {
          name: "John Smith",
          role: "Waitress - 16h",
          logo:woman,
          shifts: [
           
            { time: "08:00-12:00", hours: "4h", pay: "$80", type: "absent" },
            { time: "Approved leave", hours: "All day", pay: "", type: "leave" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },
            { time: "Approved leave", hours: "All day", pay: "", type: "leave" },
            { time: "18:30-23:30", hours: "5h", pay: "$120", type: "evening" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },
             { time: "08:00-12:00", hours: "4h", pay: "$80", type: "absent" },{},{},
             { time: "18:30-23:30", hours: "5h", pay: "$120", type: "evening" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },{},{},

          ],
        },
      ],
    },


    {
      title: "Janitors (2)",
      staff: [
        {
          name: "Carol Saragosa",
          role: "Waitress - 16h",
            logo:man,
          shifts: [
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },
             { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },
            {},
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },
            { time: "Approved leave", hours: "All day", pay: "", type: "leave" },
            { time: "18:30-23:30", hours: "5h", pay: "$120", type: "evening" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },
          ],
        },
        {
          name: "John Smith",
          role: "Waitress - 16h",
           logo:woman,
          shifts: [
            { time: "08:00-12:00", hours: "4h", pay: "$80", type: "absent" },
             { time: "08:00-12:00", hours: "4h", pay: "$80", type: "absent" },
            { time: "Approved leave", hours: "All day", pay: "", type: "leave" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },
            { time: "Approved leave", hours: "All day", pay: "", type: "leave" },
            { time: "18:30-23:30", hours: "5h", pay: "$120", type: "evening" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },
             { time: "08:00-12:00", hours: "4h", pay: "$80", type: "absent" },{},{},
             { time: "18:30-23:30", hours: "5h", pay: "$120", type: "evening" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },{},{},

          ],
        },
      ],
    },

    {
      title: "Waiters/Waitresses (6)",
      staff: [
        {
          name: "Carol Saragosa",
          role: "Waitress - 16h",
            logo:man,
          shifts: [
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },
             { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },
            {},
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },
            { time: "Approved leave", hours: "All day", pay: "", type: "leave" },
            { time: "18:30-23:30", hours: "5h", pay: "$120", type: "evening" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },
          ],
        },
        {
          name: "John Smith",
          role: "Waitress - 16h",
           logo:woman,
          
          shifts: [
            { time: "08:00-12:00", hours: "4h", pay: "$80", type: "absent" },
             { time: "08:00-12:00", hours: "4h", pay: "$80", type: "absent" },
            { time: "Approved leave", hours: "All day", pay: "", type: "leave" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },
            { time: "Approved leave", hours: "All day", pay: "", type: "leave" },
            { time: "18:30-23:30", hours: "5h", pay: "$120", type: "evening" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },
             { time: "08:00-12:00", hours: "4h", pay: "$80", type: "absent" },{},{},
             { time: "18:30-23:30", hours: "5h", pay: "$120", type: "evening" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },{},{},
          ],
        },
        {
          name: "Carol Saragosa",
          role: "Waitress - 16h",
            logo:man,
          shifts: [
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },
             { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },
            {},
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },
            { time: "Approved leave", hours: "All day", pay: "", type: "leave" },
            { time: "18:30-23:30", hours: "5h", pay: "$120", type: "evening" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },
          ],
        },
        {
          name: "John Smith",
          role: "Waitress - 16h",
           logo:woman,

          shifts: [
            { time: "08:00-12:00", hours: "4h", pay: "$80", type: "absent" },
             { time: "08:00-12:00", hours: "4h", pay: "$80", type: "absent" },
            { time: "Approved leave", hours: "All day", pay: "", type: "leave" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },
            { time: "Approved leave", hours: "All day", pay: "", type: "leave" },
            { time: "18:30-23:30", hours: "5h", pay: "$120", type: "evening" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },
             { time: "08:00-12:00", hours: "4h", pay: "$80", type: "absent" },{},{},
             { time: "18:30-23:30", hours: "5h", pay: "$120", type: "evening" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },{},{},
          ],
        },
        {
          name: "Carol Saragosa",
          role: "Waitress - 16h",
            logo:man,
          shifts: [
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },
             { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },
            {},
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },
            { time: "Approved leave", hours: "All day", pay: "", type: "leave" },
            { time: "18:30-23:30", hours: "5h", pay: "$120", type: "evening" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },
          ],
        },
        {
          name: "John Smith",
          role: "Waitress - 16h",
           logo:woman,
          shifts: [
            { time: "08:00-12:00", hours: "4h", pay: "$80", type: "absent" },
             { time: "08:00-12:00", hours: "4h", pay: "$80", type: "absent" },
            { time: "Approved leave", hours: "All day", pay: "", type: "leave" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },
            { time: "Approved leave", hours: "All day", pay: "", type: "leave" },
            { time: "18:30-23:30", hours: "5h", pay: "$120", type: "evening" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },
             { time: "08:00-12:00", hours: "4h", pay: "$80", type: "absent" },{},{},
             { time: "18:30-23:30", hours: "5h", pay: "$120", type: "evening" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },{},{},
          ],
        },


      ],
    }
  
];
export default staffData;