function ingredients(order) {
    if (order.indexOf(',') !== -1) {
      let choice = order.split(',-').shift();
      let toOmit = order.split(',-').slice(1);
      let menuSelection = menuParser(choice);
      for (let omission of toOmit) {
        if (menuSelection.indexOf(omission) !== -1) {
          menuSelection.splice(menuSelection.indexOf(omission), 1);
        }
      }
      return menuSelection.join(',');
    } else return menuParser(order).join(',');
  }

  function menuParser(selection) {
    const menu = {
      Classic: 'strawberry, banana, pineapple, mango, peach, honey, ice, yogurt',
      'Forest Berry': 'strawberry, raspberry, blueberry, honey, ice, yogurt',
      Freezie: 'blackberry, blueberry, black currant, grape juice, frozen yogurt',
      Greenie: 'green apple, kiwi, lime, avocado, spinach, ice, apple juice',
      'Vegan Delite':
        'strawberry, passion fruit, pineapple, mango, peach, ice, soy milk',
      'Just Desserts': 'banana, ice cream, chocolate, peanut, cherry',
    };
    return menu[selection].split(', ').sort();
  }