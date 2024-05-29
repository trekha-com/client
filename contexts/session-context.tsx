'use client';

import { User } from '@/interfaces/user';
import { createContext, useContext, useEffect, useState } from 'react';

interface Session {
  user: User | null;
  token: string | null;
}

interface SessionContextType {
  session: Session;
  setSession: (session: Session) => void;
  clearSession: () => void;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

// Constant for local storage key
const SESSION_STORAGE_KEY = 'session';

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const [session, setSessionState] = useState<Session>({ user: null, token: null });

  const setSession = (newSession: Session) => {
    setSessionState(newSession);
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(newSession));
  };

  const clearSession = () => {
    setSessionState({ user: null, token: null });
    localStorage.removeItem(SESSION_STORAGE_KEY);
  };

  useEffect(() => {
    const storedSession = localStorage.getItem(SESSION_STORAGE_KEY);
    if (storedSession) {
      setSessionState(JSON.parse(storedSession));
    }
  }, []);

  return <SessionContext.Provider value={{ session, setSession, clearSession }}>{children}</SessionContext.Provider>;
}

export function useSession(): SessionContextType {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error('useSession must be used within a SessionProvider');
  }
  return context;
}
