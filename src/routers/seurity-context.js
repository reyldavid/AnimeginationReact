import React from 'react';

export const securityCtx = {
    username: "",
    password: "",
    token: "",
    account: {},
    firstname: "",
    roles: [],
    order: {}
  }
  
  export const SecurityContext = React.createContext( securityCtx );
  
  export const SecurityProvider = SecurityContext.Provider;