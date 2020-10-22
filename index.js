// User must be able to:
// enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
// check and uncheck items on the list by clicking the "Check" button
// permanently remove items from the list

function shoppingList() {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    // create item to hold value of class "js-shopping-list-entry"
    let item = $('#shopping-list-entry').val()
    console.log(item)

    // if item value isn't empty, add item and its classes to shopping list
    if (item !== "") {
      $('.shopping-list').append(`<li>
        <span class="shopping-item">${item}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`)
      $('#shopping-list-entry').val("")
    }
  })

    // make check button, when clicked, adopt css stylings of line-through
$('.shopping-list').on('click', '.shopping-item-toggle',function(event) {
  $(this).closest('.shopping-item-controls').siblings('.shopping-item').toggleClass('shopping-item__checked')
})
    // make delete button remove item upon clicking
$('.shopping-list').on('click','.shopping-item-delete', function(event) {
  $(this).closest('li').remove()
  })
}



shoppingList()
