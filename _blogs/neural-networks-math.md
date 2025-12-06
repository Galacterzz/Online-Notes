---
title: "Understanding Neural Networks Mathematically"
date: 2023-01-01
description: "A deep dive into the mathematical foundations of neural networks"
tags: [machine-learning, mathematics, neural-networks]
---

# Understanding Neural Networks Mathematically

## Introduction

Neural networks are powerful machine learning models inspired by the human brain. In this post, we'll explore the mathematical foundations that make them work.

## Mathematical Foundations

### Forward Propagation

In a neural network, forward propagation computes the output using the following equation:

$$ a^{[l]} = g^{[l]}(z^{[l]}) $$
$$ z^{[l]} = W^{[l]}a^{[l-1]} + b^{[l]} $$

Where:
- $ a^{[l]} $ is the activation of layer $ l $
- $ W^{[l]} $ is the weight matrix of layer $ l $
- $ b^{[l]} $ is the bias vector of layer $ l $
- $ g^{[l]} $ is the activation function of layer $ l $

### Backpropagation

The backpropagation algorithm uses the chain rule to compute gradients:

$$ \frac{\partial \mathcal{L}}{\partial z^{[l]}} = \frac{\partial \mathcal{L}}{\partial a^{[l]}} \cdot \frac{\partial a^{[l]}}{\partial z^{[l]}} $$
$$ \frac{\partial \mathcal{L}}{\partial W^{[l]}} = \frac{\partial \mathcal{L}}{\partial z^{[l]}} \cdot \frac{\partial z^{[l]}}{\partial W^{[l]}} $$

## Code Implementation

Here's a simple implementation of a neural network layer:

```python
import numpy as np

class NeuralLayer:
    def __init__(self, input_size, output_size, activation='relu'):
        # Initialize weights and biases
        self.W = np.random.randn(output_size, input_size) * 0.01
        self.b = np.zeros((output_size, 1))
        self.activation = activation
        
    def forward(self, A_prev):
        # Compute Z = W * A_prev + b
        self.Z = np.dot(self.W, A_prev) + self.b
        # Apply activation function
        if self.activation == 'relu':
            self.A = np.maximum(0, self.Z)
        elif self.activation == 'sigmoid':
            self.A = 1 / (1 + np.exp(-self.Z))
        elif self.activation == 'tanh':
            self.A = np.tanh(self.Z)
        return self.A
    
    def backward(self, dA):
        # Compute derivatives
        if self.activation == 'relu':
            dZ = dA * (self.Z > 0)
        elif self.activation == 'sigmoid':
            s = 1 / (1 + np.exp(-self.Z))
            dZ = dA * s * (1 - s)
        elif self.activation == 'tanh':
            dZ = dA * (1 - np.power(self.A, 2))
            
        m = dA.shape[1]  # number of examples
        self.dW = (1/m) * np.dot(dZ, self.A_prev.T)
        self.db = (1/m) * np.sum(dZ, axis=1, keepdims=True)
        dA_prev = np.dot(self.W.T, dZ)
        
        return dA_prev

# Example usage
layer = NeuralLayer(3, 4, activation='relu')
input_data = np.random.randn(3, 5)  # 3 features, 5 examples
output = layer.forward(input_data)
print(f"Output shape: {output.shape}")
```

## Activation Functions

### Sigmoid Function

$$ \sigma(z) = \frac{1}{1 + e^{-z}} $$

### Tanh Function

$$ \tanh(z) = \frac{e^z - e^{-z}}{e^z + e^{-z}} $$

### ReLU Function

$$ \text{ReLU}(z) = \max(0, z) $$

## Loss Functions

### Binary Cross-Entropy

$$ \mathcal{L}(\hat{y}, y) = -[y \log(\hat{y}) + (1-y) \log(1-\hat{y})] $$

### Mean Squared Error

$$ \text{MSE} = \frac{1}{m} \sum_{i=1}^{m} (y^{(i)} - \hat{y}^{(i)})^2 $$

## Conclusion

Understanding the mathematical foundations of neural networks is crucial for developing effective models. The combination of linear algebra, calculus, and optimization theory forms the backbone of deep learning.