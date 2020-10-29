def max_tickets(tickets)

  sorted = tickets.sort
  max_length = 0
  
  i = 0
  while i < sorted.length - 1
    j = i + 1
    val = (sorted[i] - sorted[j]).abs
    current_length = 1
    while j < sorted.length && val == 0 || val == 1
      i += 1
      j += 1
      val = j < sorted.length ? (sorted[i] - sorted[j]).abs : nil
      current_length += 1
    end
    max_length = current_length > max_length ? current_length : max_length
    i += 1
  end
  
  max_length

end