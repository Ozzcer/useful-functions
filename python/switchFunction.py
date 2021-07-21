def switch(x):
  return {
      'one': 1,
      'two': 2,
  }.get(x, 5)  # 5 is default if x not found
