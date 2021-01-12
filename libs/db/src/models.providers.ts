import { LogicTest } from "./logicTest/logicTest.entity";
import { PersonalityTest } from "./personalityTest/personalityTest.entity";
import { TypingTest } from "./typingTest/typingTest.entity";
import { User } from "./user/user.entity";

export const models = [
  User,
  LogicTest,
  PersonalityTest,
  TypingTest,
];

export const modelsProviders = models.map(item=>({
  provide: item.PROVIDE_NAME,
  useValue: item,
}));
