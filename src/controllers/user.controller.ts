import { Request, Response } from 'express';

const users: { name: string; email: string }[] = []; // stockage en mémoire

export const getUsers = (req: Request, res: Response) => {
  res.json({ users });
};

export const addUser = (req: Request, res: Response) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ message: "Nom et email requis" });
  }
  users.push({ name, email });
  console.log("🛠 Utilisateur ajouté :", { name, email });
  res.json({ message: `Utilisateur ${name} ajouté avec succès !`, email });
};
