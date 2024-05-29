import { createContext, useContext, useEffect, useState } from 'react';

interface Session {
  // TODO Add user
  token: string | null;
}

interface SessionContextType {
  session: Session;
  setSession: (session: Session) => void;
  clearSession: () => void;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const [session, setSessionState] = useState<Session>({ token: null });

  const setSession = (newSession: Session) => {
    setSessionState(newSession);
    localStorage.setItem('session', JSON.stringify(newSession));
  };

  const clearSession = () => {
    setSessionState({ token: null });
    localStorage.removeItem('session');
  };

  useEffect(() => {
    const storedSession = localStorage.getItem('session');
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
