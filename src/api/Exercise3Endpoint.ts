import { faker } from "@faker-js/faker";

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

/**
 * A mock API function that returns a person's account data.
 *
 * It has a 10% chance to throw an error :)
 */
export type UserData = {
  id: string;
  name: string;
  email: string;
};

export function Exercise3Endpoint<T extends string | string[]>(
  input: T
): T extends string ? Promise<UserData> : Promise<UserData[]>;
export async function Exercise3Endpoint(
  id: string | string[]
): Promise<UserData | UserData[]> {
  return new Promise((resolve, reject) => {
    if (getRandomIntInclusive(1, 10) === 10)
      reject(new Error("Internal Server Error"));
    else {
      setTimeout(() => {
        if (Array.isArray(id)) {
          resolve(
            id.map((v) => ({
              id: v,
              name: faker.person.fullName(),
              email: faker.internet.email(),
            }))
          );
        } else
          resolve({
            id,
            name: faker.person.fullName(),
            email: faker.internet.email(),
          });
      }, getRandomIntInclusive(0, 10) * 100);
    }
  });
}
