import Choices from "choices.js";

export const choicesSelect = () => {
  const select = document.querySelector(".select-country");
  const options = select?.querySelectorAll("option");

  if (!options?.length) return;

  const choicesSelect = new Choices(select, {
    searchEnabled: false,
    itemSelectText: "",
    shouldSort: false,

    callbackOnCreateTemplates: function (template) {
      let classNames = this.config.classNames;
      let itemSelectText = this.config.itemSelectText;
      return {
        item: ({ classNames }, data) => {
          const src = options[data.choiceId - 1].getAttribute(["data-src"]);

          return template(`
            <div class="${classNames.item} ${
            data.highlighted
              ? classNames.highlightedState
              : classNames.itemSelectable
          } ${
            data.placeholder ? classNames.placeholder : ""
          }" data-item data-id="${data.id}" data-value="${data.value}" ${
            data.active ? 'aria-selected="true"' : ""
          } ${data.disabled ? 'aria-disabled="true"' : ""}>
            <div class="select__wrapper">
              <div class="select__image">
                <img src="${src}" alt="">
              </div>
              <div class="select__text">${String(data.label)}</div>
            </div>
            </div>
          `);
        },

        choice: ({ classNames }, data) => {
          const src = options[data.id - 1].getAttribute(["data-src"]);

          return template(`
            <div class="${classNames.item} ${classNames.itemChoice} ${
            data.disabled ? classNames.itemDisabled : classNames.itemSelectable
          }" data-select-text="${this.config.itemSelectText}" data-choice ${
            data.disabled
              ? 'data-choice-disabled aria-disabled="true"'
              : "data-choice-selectable"
          } data-id="${data.id}" data-value="${data.value}" ${
            data.groupId > 0 ? 'role="treeitem"' : 'role="option"'
          }>
            <div class="select__wrapper">
              <div class="select__image">
                <img src="${src}" alt="">
              </div>
              <div class="select__text">${String(data.label)}</div>
            </div>
            </div>
          `);
        },
      };
    },
  });
};
