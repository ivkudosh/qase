import { faker } from '@faker-js/faker';

export const randomName = faker.word.noun;
export const randomText = faker.word.words;

export const getRandomSeverity = () => {
    const severityValues = ['Blocker', 'Critical', 'Major', 'Normal', 'Minor', 'Trivial', 'Not set'];
    const randomIndex = Math.floor(Math.random() * severityValues.length);
    return severityValues[randomIndex];
};
