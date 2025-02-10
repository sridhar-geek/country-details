"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

  const ThemeSwitch =() =>  {
  const { setTheme } = useTheme();
  const [mode, setMode] = React.useState(false)

  React.useEffect(() => {
    setTheme(mode?  'light' : "dark" )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[mode])

  return (
   <Button onClick={ () => setMode(!mode)} variant='ghost' >
    {mode? <Moon />: <Sun /> } <p className="font-semibold">{ mode ? 'Dark Mode' : 'Light Mode'}</p>
   </Button>
  );
}

export default ThemeSwitch
