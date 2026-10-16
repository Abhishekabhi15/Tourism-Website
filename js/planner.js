(() => {
  const activityTemplates = {
    budget: ['Free walking tour', 'Local market visit', 'Street food exploration', 'Public beach/park', 'Self-guided sightseeing'],
    adventure: ['Trekking expedition', 'Water sports session', 'Zip-lining experience', 'Rock climbing', 'Scuba diving/snorkeling'],
    family: ['Theme park visit', 'Family-friendly museum', 'Nature walk', 'Beach day with kids', 'Cultural workshop'],
    luxury: ['Private yacht cruise', 'Spa & wellness retreat', 'Fine dining experience', 'Helicopter tour', 'VIP lounge access'],
    romantic: ['Sunset dinner cruise', 'Couples spa treatment', 'Private beach picnic', 'Wine tasting tour', 'Stargazing experience']
  };

  const dailyActivities = [
    'Arrival & City Exploration',
    'Local Sightseeing Tour',
    'Adventure Experience',
    'Cultural Tour & Heritage Walk',
    'Beach / Leisure Day',
    'Nature & Wildlife Excursion',
    'Shopping & Local Cuisine',
    'Day Trip to Nearby Attraction',
    'Free Day for Personal Exploration',
    'Departure Preparation'
  ];

  const costMultipliers = {
    budget: { hotel: 1500, food: 600, activities: 500, transport: 300 },
    moderate: { hotel: 3500, food: 1200, activities: 1500, transport: 800 },
    luxury: { hotel: 8000, food: 3000, activities: 4000, transport: 2500 }
  };

  App.generateItinerary = (dest, days, travelers, budget, style) => {
    const activities = activityTemplates[style] || activityTemplates.family;
    let html = `<h3 style="font-size:1.3rem;color:var(--text-heading);margin-bottom:20px;">Your ${days}-Day ${dest} Itinerary</h3>`;

    for (let i = 0; i < Math.min(days, 10); i++) {
      const activity = activities[i % activities.length];
      const description = dailyActivities[i % dailyActivities.length];
      html += `<div class="itinerary-day"><h4>Day ${i + 1}</h4><p><strong>${description}</strong> - ${activity}</p></div>`;
    }

    const costs = costMultipliers[budget] || costMultipliers.moderate;
    const accommodation = costs.hotel * days;
    const food = costs.food * days;
    const activityCost = costs.activities * days;
    const transport = costs.transport * days;
    const totalPerPerson = accommodation + food + activityCost + transport;
    const totalAll = totalPerPerson * travelers;

    html += `<div class="budget-summary">
      <h4 style="font-size:1.1rem;font-weight:700;margin-bottom:12px;color:var(--text-heading);">Estimated Expenses (per person)</h4>
      <div class="budget-row"><span>Accommodation (${days} nights)</span><span data-base-price="${accommodation}">${App.formatPrice(accommodation)}</span></div>
      <div class="budget-row"><span>Food & Dining</span><span data-base-price="${food}">${App.formatPrice(food)}</span></div>
      <div class="budget-row"><span>Activities</span><span data-base-price="${activityCost}">${App.formatPrice(activityCost)}</span></div>
      <div class="budget-row"><span>Transportation</span><span data-base-price="${transport}">${App.formatPrice(transport)}</span></div>
      <div class="budget-row"><span>Total per person</span><span data-base-price="${totalPerPerson}">${App.formatPrice(totalPerPerson)}</span></div>
      <div class="budget-row"><span>Total (${travelers} travelers)</span><span data-base-price="${totalAll}">${App.formatPrice(totalAll)}</span></div>
    </div>`;

    return html;
  };

  App.calculateBudget = (dest, travelers, days, hotel, transport, activities) => {
    const baseRates = {
      Bali: 1.0, Paris: 1.8, Dubai: 1.6, Switzerland: 2.2,
      Tokyo: 1.7, Maldives: 2.5, Goa: 0.6, Kerala: 0.7
    };
    const multiplier = baseRates[dest] || 1.0;

    const hotelCosts = { budget: 1200, standard: 3000, premium: 6000, luxury: 12000 };
    const transportCosts = { public: 400, rental: 1500, taxi: 2000, private: 4000 };
    const activityCosts = { basic: 500, moderate: 1500, premium: 4000 };

    const accommodation = Math.round(hotelCosts[hotel] * days * multiplier);
    const transportation = Math.round(transportCosts[transport] * days * multiplier);
    const food = Math.round(1000 * days * multiplier);
    const activityTotal = Math.round(activityCosts[activities] * days * multiplier);
    const misc = Math.round((accommodation + transportation + food + activityTotal) * 0.1);
    const totalPerPerson = accommodation + transportation + food + activityTotal + misc;
    const total = totalPerPerson * travelers;

    return { accommodation, transportation, food, activities: activityTotal, misc, totalPerPerson, total };
  };

  const animateCounter = (el, target, duration = 1000) => {
    let start = 0;
    const step = target / (duration / 16);
    const symbol = App.DATA.currencySymbols[App.currentCurrency] || '\u20B9';
    const rate = App.DATA.currencyRates[App.currentCurrency] || 1;
    const tick = () => {
      start += step;
      if (start >= target) {
        el.textContent = `${symbol}${Math.round(target * rate).toLocaleString()}`;
        return;
      }
      el.textContent = `${symbol}${Math.round(start * rate).toLocaleString()}`;
      requestAnimationFrame(tick);
    };
    tick();
  };

  document.addEventListener('DOMContentLoaded', () => {
    const plannerForm = document.getElementById('tripPlannerForm');
    if (plannerForm) {
      plannerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const dest = document.getElementById('planDest').value;
        const days = parseInt(document.getElementById('planDays').value);
        const travelers = parseInt(document.getElementById('planTravelers').value);
        const budget = document.getElementById('planBudget').value;
        const styleEl = document.querySelector('input[name="travelStyle"]:checked');
        const style = styleEl ? styleEl.value : 'family';

        if (!dest || !days || !travelers) return;

        const result = document.getElementById('plannerResult');
        if (result) {
          result.innerHTML = App.generateItinerary(dest, days, travelers, budget, style);
        }
      });
    }

    const calcForm = document.getElementById('budgetCalcForm');
    if (calcForm) {
      calcForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const dest = document.getElementById('calcDest').value;
        const travelers = parseInt(document.getElementById('calcTravelers').value);
        const days = parseInt(document.getElementById('calcDays').value);
        const hotel = document.getElementById('calcHotel').value;
        const transport = document.getElementById('calcTransport').value;
        const activities = document.getElementById('calcActivities').value;

        const breakdown = App.calculateBudget(dest, travelers, days, hotel, transport, activities);
        const result = document.getElementById('calcResult');
        if (result) {
          result.innerHTML = `
            <div class="calc-total">
              <div class="calc-total-label">Estimated Trip Cost</div>
              <div class="calc-total-amount" id="animatedTotal">0</div>
            </div>
            <div class="budget-summary">
              <div class="budget-row"><span>Accommodation</span><span>${App.formatPrice(breakdown.accommodation)}</span></div>
              <div class="budget-row"><span>Transportation</span><span>${App.formatPrice(breakdown.transportation)}</span></div>
              <div class="budget-row"><span>Food</span><span>${App.formatPrice(breakdown.food)}</span></div>
              <div class="budget-row"><span>Activities</span><span>${App.formatPrice(breakdown.activities)}</span></div>
              <div class="budget-row"><span>Miscellaneous</span><span>${App.formatPrice(breakdown.misc)}</span></div>
              <div class="budget-row"><span>Per Person</span><span>${App.formatPrice(breakdown.totalPerPerson)}</span></div>
              <div class="budget-row"><span>Total (${travelers} travelers)</span><span>${App.formatPrice(breakdown.total)}</span></div>
            </div>`;
          const animEl = document.getElementById('animatedTotal');
          if (animEl) animateCounter(animEl, breakdown.total);
        }
      });
    }
  });
})();