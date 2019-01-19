import React from 'react'
import posed from 'react-pose';

const Container = posed.div({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 20, staggerDirection: -1 }
});

const P = posed.p({
  enter: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 }
});

export default function Home() {
  return (
    <Container>
      <h3>Home</h3>
        <P>Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.</P>
        <P>To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar. Click Insert and then choose the elements you want from the different galleries.</P>
        <P>Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme.</P>
        <P>Save time in Word with new buttons that show up where you need them. To change the way a picture fits in your document, click it and a button for layout options appears next to it. When you work on a table, click where you want to add a row or a column, and then click the plus sign.</P>
        <P>Reading is easier, too, in the new Reading view. You can collapse parts of the document and focus on the text you want. If you need to stop reading before you reach the end, Word remembers where you left off - even on another device.</P>
    </Container>
  )
}
