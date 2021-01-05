panel.plugin("sunst/sectionheading-block", {
  blocks: {
    sectionheading: `
      <h2 @click="open">
        {{ content.sectionheading }} <span>/ {{ content.headingno }}</span>
      </h2>
    `
  }
});