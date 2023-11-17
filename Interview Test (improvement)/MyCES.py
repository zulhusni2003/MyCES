# 1 ) Logic / Problem Solving
# A Pythagorean triplet is a set of three natural numbers, a < b < c, for which, a2 + b2 = c2
# For example, 32 + 42 = 9 + 16 = 25 = 52.
# There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc.

def find_pythagorean_triplet(target_sum):
    for a in range(1, target_sum // 3): # // 3 untuk reduce unnecessary iterations 
        b = (target_sum**2 - 2 * target_sum * a) // (2 * (target_sum - a))
        c = target_sum - a - b
        if a**2 + b**2 == c**2:
            return a, b, c

# Set target sum
target_sum = 1000

# Find the Pythagorean triplet
triplet = find_pythagorean_triplet(target_sum)

if triplet:
    product = triplet[0] * triplet[1] * triplet[2]

    print(f"The Pythagorean triplet is: {triplet}")
    print(f"The product abc is: {product}")
else:
    print("No Pythagorean triplet found.")




# ----------------------------------------------------------------------------------------------------------------------------------------------------------------
# 2 ) Data Manipulation
# Given an array, rotate the array to the right by k steps, where k is non-negative.

def rotate_array(nums, k):
    # Pastikan k within the array length untuk elak dari unnecessary rotations
    k = k % len(nums)
    
    # Reverse the entire array
    reverse(nums, 0, len(nums) - 1)
    
    # Reverse the first k elements
    reverse(nums, 0, k - 1)

    # Reverse the remaining elements
    reverse(nums, k, len(nums) - 1)

def reverse(nums, start, end):
    while start < end:
        # Swap elements at start and end indices
        nums[start], nums[end] = nums[end], nums[start]
        start += 1
        end -= 1

# Ni Example 1
nums1 = [1, 2, 3, 4, 5, 6, 7]
k1 = 3
rotate_array(nums1, k1)
print(nums1)  # Output mesti dapat: [5, 6, 7, 1, 2, 3, 4]

# Ni Example 2
nums2 = [-1, -100, 3, 99]
k2 = 2
rotate_array(nums2, k2)
print(nums2)  # Output mesti dapat: [3, 99, -1, -100]
