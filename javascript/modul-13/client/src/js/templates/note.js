const template = `{{#each notes}}
<li class="note-list__item" data-id="{{id}}">
  <div class="note">
    <div class="note__content">
      <h2 class="note__title">{{title}}</h2>
      <p class="note__body">{{body}}</p>
    </div>
    <footer class="note__footer">
      <section class="note__section">
        <button class="action" data-action="decrease-priority">
          <i class="material-icons action__icon">expand_more</i>
        </button>
        <button class="action" data-action="increase-priority">
          <i class="material-icons action__icon">expand_less</i>
        </button>
        <span class="note__priority">Priority: {{priority}}</span>
      </section>
      <section class="note__section">
        <button class="action" data-action="edit-note">
          <i class="material-icons action__icon">edit</i>
        </button>
        <button class="action" data-action="delete-note">
          <i class="material-icons action__icon">delete</i>
        </button>
      </section>
    </footer>
  </div>
</li>
{{/each}}`;

export default template;
