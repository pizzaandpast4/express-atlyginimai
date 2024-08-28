import { footer } from "../components/footer.js";
import { head } from "../components/head.js";
import { header } from "../components/header.js";
import { accountsData } from "../data/accountsData.js";

export function pageViewAllAccounts() {
    return `
        <!DOCTYPE html>
        <html lang="en">
        ${head('Visos paskyros', ['main', 'header', 'table', 'button'])}
        <body>
            ${header('/accounts')}

            <main>
                <div class="flex">
                    <h1>Visos paskyros</h1>
                    <a class="btn" href="/create-account">+ Nauja</a>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Vardas</td>
                            <td>Isidarbinimo data</td>
                            <td>Valandinis</td>
                            <td>Atlyginimas</td>
                        </tr>
                    </thead>
                    <tbody>
                        ${accountsData.map((item, index) => `
                            <tr>
                                <td>${index + 1}</td>
                                <td>${item.name}</td>
                                <td>${item.date}</td>
                                <td>${item.rate}</td>
                                <td>${item.salary}</td>
                            </tr>`).join('')}
                    </tbody>
                </table>
            </main>

            ${footer()}
        </body>
        </html>`;
}