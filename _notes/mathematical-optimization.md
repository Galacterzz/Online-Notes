---
title: "Mathematical Optimization in Machine Learning"
date: 2023-02-15
description: "Exploring optimization techniques used in machine learning algorithms"
tags: [mathematics, optimization, machine-learning]
---

# Mathematical Optimization in Machine Learning

## Introduction

Optimization is at the heart of machine learning. In this note, we'll explore the mathematical foundations of optimization techniques used in ML.

## Gradient Descent

The gradient descent algorithm minimizes a cost function $ J(\theta) $ by iteratively updating parameters:

$$ \theta := \theta - \alpha \nabla J(\theta) $$

Where:
- $ \theta $ represents the parameters
- $ \alpha $ is the learning rate
- $ \nabla J(\theta) $ is the gradient of the cost function

### Batch Gradient Descent

$$ \theta := \theta - \alpha \frac{1}{m} \sum_{i=1}^{m} (h_\theta(x^{(i)}) - y^{(i)}) x^{(i)} $$

### Stochastic Gradient Descent

$$ \theta := \theta - \alpha (h_\theta(x^{(i)}) - y^{(i)}) x^{(i)} $$

## Code Example

```python
import numpy as np
import matplotlib.pyplot as plt

def gradient_descent(X, y, theta, learning_rate=0.01, iterations=1000):
    """
    Perform gradient descent to minimize cost function
    """
    m = len(y)
    cost_history = []
    
    for i in range(iterations):
        # Calculate predictions
        predictions = X.dot(theta)
        
        # Calculate errors
        errors = predictions - y
        
        # Calculate cost
        cost = (1/(2*m)) * np.sum(errors ** 2)
        cost_history.append(cost)
        
        # Calculate gradients
        gradients = (1/m) * X.T.dot(errors)
        
        # Update parameters
        theta = theta - learning_rate * gradients
    
    return theta, cost_history

# Example usage
# Generate sample data
np.random.seed(42)
X = 2 * np.random.rand(100, 1)
y = 4 + 3 * X + np.random.randn(100, 1)

# Add bias term
X_b = np.c_[np.ones((100, 1)), X]

# Initialize parameters
theta = np.random.randn(2, 1)

# Run gradient descent
theta_optimized, cost_history = gradient_descent(X_b, y, theta, learning_rate=0.1, iterations=1000)

print(f"Optimized parameters: {theta_optimized.flatten()}")
```

## Convex Optimization

A function $ f(x) $ is convex if:

$$ f(\lambda x_1 + (1-\lambda) x_2) \leq \lambda f(x_1) + (1-\lambda) f(x_2) $$

For all $ x_1, x_2 $ in the domain of $ f $ and $ \lambda \in [0, 1] $.

## Lagrange Multipliers

For constrained optimization problems:

$$ \min f(x) \text{ subject to } g(x) = 0 $$

The Lagrangian is:

$$ \mathcal{L}(x, \lambda) = f(x) - \lambda g(x) $$

## Newton's Method

Newton's method for optimization:

$$ \theta := \theta - [H(\theta)]^{-1} \nabla f(\theta) $$

Where $ H(\theta) $ is the Hessian matrix.

## Conclusion

Mathematical optimization provides the theoretical foundation for training machine learning models. Understanding these concepts is essential for developing efficient algorithms.