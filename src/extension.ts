
import * as vscode from 'vscode';

function randomItem(items: string[]): string {
    return items[Math.floor(Math.random() * items.length)];
}

export function activate(context: vscode.ExtensionContext) {

    const callCat = vscode.commands.registerCommand(
        'cat-mood.callCat',
        () => {
            const messages = [
                'Мяу Я пришёл поддержать тебя! 🐱',
                'Я пришёл проконтролировать твои успехи. Работай, человек! 🐈',
                'Мурр Ты отлично справляешься! 😽',
                'Котик одобряет твой код! 🐾'
            ];

            vscode.window.showInformationMessage(randomItem(messages));
        }
    );

    const catMood = vscode.commands.registerCommand(
        'cat-mood.catMood',
        () => {
            const moods = [
                'Котик сегодня очень довольный 🐱',
                'Котик хочет спать... 💤',
                'Котик немного голодный 🐟',
                'Котик в прекрасном настроении 😽'
            ];

            vscode.window.showInformationMessage(randomItem(moods));
        }
    );

    const motivation = vscode.commands.registerCommand(
        'cat-mood.motivation',
        () => {
            const phrases = [
                'Ты справишься! Даже большой проект начинается с одной строчки! 💗',
                'Не сдавайся! Котик в тебя верит! 🐱',
                'Ошибки — это просто часть обучения! 🐾',
                'Ты умничка! Продолжай в том же духе! 😽'
            ];

            vscode.window.showInformationMessage(randomItem(phrases));
        }
    );

    context.subscriptions.push(callCat, catMood, motivation);
}

export function deactivate() {}

