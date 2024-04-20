import React, { useState } from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react'

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {

  const [theme,setTheme] = useState(()=>{
    let data = JSON.parse(localStorage.getItem('dark'));
    return data ? 'dark' : 'light';
  })
  
  const ToggleTheme = () => {
    setTheme( current => {
      if(current === 'light'){
        localStorage.setItem('dark', JSON.stringify(true));
        return 'dark';
      }else{
        localStorage.removeItem('dark');
        return 'light';
      }
    })
  }

  useEffect(()=>{
    if(theme === 'dark'){
      document.body.classList.add('dark');
    }else{
      document.body.classList.remove('dark');
    }
  }, [theme])

  const contextData = {
    theme, ToggleTheme
  }
  return (
    <ThemeContext.Provider value={contextData} >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext);
