import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "gluon-contract" is now active!');
	let disposable = vscode.commands.registerCommand('gluon-contract.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from gluon-contract!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
