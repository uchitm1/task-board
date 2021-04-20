import Cards from "../models/cards";

interface Card {
  id: number;
  title: string;
  createdBy: string;
  taskColumn: string;
}

export const getCards = async () => {
  const res = await Cards.findAll();
  return res;
};

export const addCard = async (data: Card) => {
  console.log(data);
  const res = await Cards.create({
    title: data.title,
    created_by: data.createdBy,
    task_column: data.taskColumn,
  });
  return res;
};