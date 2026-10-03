/**
 * Setzt den dynamischen Header-Text (Name und Datum) als CSS-Variable.
 * @param {string} userName - Der Name der Person (z.B. "Michael Dörflinger").
 * @param {string} locale - Das gewünschte Sprachformat (z.B. 'de-DE' oder 'en-US').
 */
function setDynamicHeader(userName, locale) {
    const today = new Date();
    
    // Optionen für die Formatierung des Datums
    const dateOptions = {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    };
    
    // 1. Datum basierend auf der übergebenen Sprache formatieren
    const formattedDate = today.toLocaleDateString(locale, dateOptions);
    
    // 2. Den vollständigen Header-Text zusammenfügen
    let fullHeaderText;
    if (locale.startsWith('de')) {
        // Beispiel DE: Michael Dörflinger, 15. Oktober 2025
        fullHeaderText = `${userName}, ${formattedDate}`;
    } else {
        // Beispiel EN: Michael Dörflinger, October 15, 2025
        fullHeaderText = `${userName}, ${formattedDate}`;
    }
    
    // 3. Das Root-Element auswählen (um die CSS-Variable zu setzen)
    const rootElement = document.body;

    // 4. Die CSS-Variable setzen (mit Anführungszeichen für das 'content'-Attribut)
    rootElement.style.setProperty('--header-text', '"' + fullHeaderText + '"');
}

