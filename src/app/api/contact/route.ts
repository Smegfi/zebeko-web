import { existsSync } from "fs";
import { mkdir, writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validace
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Všechna pole jsou povinná" },
        { status: 400 }
      );
    }

    // Validace emailu
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Neplatná e-mailová adresa" },
        { status: 400 }
      );
    }

    // Vytvořit složku pro kontakty, pokud neexistuje
    const contactsDir = join(process.cwd(), "data", "contacts");
    if (!existsSync(contactsDir)) {
      await mkdir(contactsDir, { recursive: true });
    }

    // Vytvořit název souboru s timestampem
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const filename = `contact-${timestamp}.txt`;
    const filepath = join(contactsDir, filename);

    // Formátovat data pro uložení
    const contactData = `
========================================
KONTAKTNÍ FORMULÁŘ - ${new Date().toLocaleString("cs-CZ")}
========================================

Jméno: ${name}
E-mail: ${email}

Zpráva:
${message}

========================================
IP adresa: ${request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "Neznámá"}
User Agent: ${request.headers.get("user-agent") || "Neznámý"}
========================================

`;

    // Uložit do souboru
    await writeFile(filepath, contactData, "utf-8");

    return NextResponse.json(
      { 
        success: true, 
        message: "Kontaktní formulář byl úspěšně odeslán" 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Chyba při ukládání kontaktního formuláře:", error);
    return NextResponse.json(
      { error: "Došlo k chybě při ukládání formuláře" },
      { status: 500 }
    );
  }
}
