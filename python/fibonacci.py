def fibonacci(n):
  fib_list = [0, 1]
  if n == 0:
    return 0
  elif n == 1:
    return 1
  else:
    for x in range(2, n+1):
      fib_list.append(fib_list[x-2] + fib_list[x-1])
  return fib_list[n]