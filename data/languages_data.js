export const language = {
  eng: {
    nav: {
      registerLink: "Register",
      loginLink: "Login",
      transactions: "Transactions",
      btnLogout: "Logout",
    },

    pageHome: {
      h1: "Transactions",
    },

    pageLogin: {
      registerLink: "Register",
      h2: "Login",
      userName: "User name",
      userNamePlaceholder: "Enter name",
      userNameError: "Enter the name assigned to the email",
      password: "Password / Email",
      passwordPlaceholder: "Enter password / email",
      passwordError: "Enter the password or email assigned to the name",
      btnLogin: "Login",
      alert: "Unregistered email possible to register",
    },

    pageRegister: {
      loginLink: "Login",
      h2: "Register",
      userNameLabel: "User name",
      userNamePlaceholder: "Enter name",
      userNameError:
        "6-16 characters, min. 5 letters, min. 1 digit, possible - _ [] /",
      userNameErrorRegistered: "User name already registered",

      passwordLabel: "Password",
      passwordPlaceholder: "Enter password",
      passwordError: "Min. 6 characters",

      emaiLabel: "Email",
      emailPlaceholder: "Enter email",
      emailError: "Enter corect email format",
      emailErrorRegistered: "Email already registered",

      emailRepeatLabel: "Email repeat",
      emailRepeatPlacecholder: "Email repeat",
      emailRepeatError: "Repeat email",

      btnRegister: "Register",
    },
    pageTransactions: {
      table: {
        btnLogout: "Logout",
        inputsLabels: ["Find description", "Find type"],
        tableHead: ["Data", "Type", "Description", "Amount", "Balance"],
        transactionTypes: {
          1: "Income - other",
          2: "Expense - shoping",
          3: "Income - wage",
          4: "Expense - other",
        },
      },
      chartBar: {
        balance: "Balance",
      },
      chartDought: {
        transactionTypes: [
          "Income - other",
          "Expense - shoping",
          "Income - wage",
          "Expense - other",
        ],
      },
    },
  },

  pl: {
    nav: {
      registerLink: "Rejestracja",
      loginLink: "Login",
      transactions: "Transakcje",
      btnLogout: "Wyloguj",
    },

    pageHome: {
      h1: "Transakcje",
    },

    pageLogin: {
      registerLink: "Rejestracja",
      h2: "Logowanie",
      userName: "Nazwa u??ytkownika",
      userNamePlaceholder: "Podaj nazw??",
      userNameError: "Podaj nazw?? przypisan?? do emaila",
      password: "Has??o / Email",
      passwordPlaceholder: "Podaj has??o / email",
      passwordError: "Podaj has??o lub email przypisane do nazwy",
      btnLogin: "Zaloguj",
      alert: "Email niezarejestrowany, mo??liwy do zarejestrowania",
    },
    pageRegister: {
      loginLink: "Logowanie",
      h2: "Rejestracja",
      userNameLabel: "Nazwa u??ytkownika",
      userNamePlaceholder: "Podaj nazw??",
      userNameError:
        "6-16 znak??w, min. 5 liter, min. 1 cyfra, mo??liwe - _ [] /",
      userNameErrorRegistered: "Nazwa u??ytkownika ju?? zarejestrowana ",

      passwordLabel: "Has??o",
      passwordPlaceholder: "Podaj has??o",
      passwordError: "Min. 6 znak??w",

      emaiLabel: "Email",
      emailPlaceholder: "Podaj email",
      emailError: "Podaj format email",
      emailErrorRegistered: "Email ju?? zarejestrowany",

      emailRepeatLabel: "Potwierd?? email",
      emailRepeatPlacecholder: "Potwierd?? email",
      emailRepeatError: "Potwierd?? email",

      btnRegister: "Zarejestruj",
    },

    pageTransactions: {
      table: {
        btnLogout: "Wyloguj",
        inputsLabels: ["Znaj?? opis", "Znajd?? typ"],
        tableHead: ["Data", "Typ", "Opis", "Kwota", "Saldo"],
        transactionTypes: {
          1: "Wydatki - inne",
          2: "Wydatki - zakupy",
          3: "Wp??ywy - wynagrodzenie",
          4: "Wp??ywy - inne",
        },
      },
      chartBar: {
        balance: "Saldo",
      },
      chartDought: {
        transactionTypes: [
          "Wp??ywy - inne",
          "Wydatki - zakupy",
          "Wp??ywy - wynagrodzenie",
          "Wp??ywy - inne",
        ],
      },
    },
  },
};
