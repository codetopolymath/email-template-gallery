#

best folder and file structure for react projects:

src/
├── components/
│   ├── common/
│   │   ├── Button.js
│   │   └── Input.js
│   ├── layout/
│   │   ├── Header.js
│   │   └── Footer.js
│   ├── specific/
│   │   ├── TodoItem.js
│   │   └── ProjectCard.js
├── contexts/
│   ├── TodoContext.js
│   └── AuthContext.js
├── hooks/
│   ├── useTodo.js
│   └── useAuth.js
├── pages/
│   ├── Home.js
│   ├── About.js
│   └── Dashboard.js
├── services/
│   ├── api.js
│   └── auth.js
├── styles/
│   ├── global.css
│   └── variables.css
├── utils/
│   ├── helpers.js
│   └── constants.js
├── App.js
└── index.js