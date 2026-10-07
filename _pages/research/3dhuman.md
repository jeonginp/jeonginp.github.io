---
layout: individual_work
title: Multi-View System for High-Quality Digital Human Reconstruction
slug: /research/multi-view-systemfor-high-quality-digital-human-reconstruction
permalink: /research/multi-view-systemfor-high-quality-digital-human-reconstruction/
date: Mar 2023 - Aug 2023
location: Vision Computing Lab, Seoul National University
advisor: Prof. Hanbyul Joo
---

## Project Overview

This project aims to create high-quality 3D reconstructions by leveraging multi-camera stereo vision and dense point clouds. Using Open3D, Colmap, and Meshlab, the goal is to capture and process 3D data with accurate depth information, producing dense 3D meshes that capture fine surface details. Key aspects of the project include camera calibration, stereo rectification, point cloud densification, and mesh reconstruction.

## Workflow

## 1. Point Cloud Generation and Mesh Mapping
   - **Open3D**: Starting with basic point cloud generation, we capture data in point cloud format and convert it to a mesh map using Open3D.
   - **Colmap and Meshlab**: Using Colmap, we create dense point clouds and further refine them in Meshlab by generating mesh maps. Meshlab's Poisson reconstruction allows us to create continuous surfaces from point clouds by filling in gaps and smoothing edges.

## 2. Camera Calibration and Stereo Rectification
   - Using GoPro cameras, we first capture stereo images for calibration. The cameras are aligned using stereo rectification, where we apply calibration and rectification to correct any misalignment.
   - **Camera Matrix Calculation**: By utilizing the camera calibration toolbox in MATLAB, we obtain intrinsic and extrinsic parameters (K, R, and t) needed for accurate depth mapping.
   - **Stereo Rectification**: Rectified images are generated to enable accurate disparity mapping. HITNET is used for stereo reconstruction, generating disparity maps that allow us to calculate depth values from the aligned images.

## 3. Dense 3D Reconstruction
   - **Disparity to Point Cloud**: Using the rectified images, we calculate disparity, which is then converted into a dense point cloud. From here, we use Poisson reconstruction in Meshlab to transform this dense point cloud into a continuous 3D mesh.
   - **Reprojection and Alignment**: We reproject the point cloud back onto the original image to validate alignment, ensuring accurate correspondence between 3D space and image coordinates.

## 4. Future work: Multi-Camera Setup for Enhanced 3D Depth
   - With multiple GoPro setups, we capture the same scene from different perspectives. Each system’s point cloud is calculated with respect to the left rectified camera as the world coordinate origin.
   - **Structure from Motion**: Using only the left cameras, we perform structure-from-motion to calculate each camera’s intrinsic and extrinsic parameters (K, R, t). The point clouds are then aligned within a single world coordinate system, merging individual perspectives for a unified and dense 3D structure.

## Technical Challenges

- **Camera Calibration**: Proper calibration ensures that depth measurements are accurate across multiple stereo pairs.
- **Stereo Rectification and Disparity Matching**: Achieving consistent disparity maps is critical, and any misalignment in rectified images affects the depth and accuracy of the final model.
- **Alignment Validation**: By overlaying images and switching back and forth, we visually check alignment, confirming that each stereo pair maintains correct correspondence.
- **Data Densification and Poisson Reconstruction**: Converting sparse point clouds into dense meshes requires detailed normals and accurate reconstruction algorithms to capture surface nuances.

## Tools and Techniques

- **Open3D**: For point cloud and basic mesh processing.
- **Colmap**: For dense point cloud generation and structure-from-motion.
- **Meshlab**: For Poisson reconstruction to create dense surface meshes.
- **MATLAB Calibration Toolbox**: To obtain camera parameters needed for accurate disparity and depth mapping.
- **HITNET Stereo Reconstruction**: For generating disparity maps from rectified images.
  
## Conclusion

Through iterative testing with different multi-camera setups, this project aims to establish a robust pipeline for dense 3D reconstructions. By aligning and merging stereo pairs, we’re working toward capturing the scene from multiple angles to create an accurate, detailed 3D model. The final objective is to use video footage to replicate this process in dynamic scenes, capturing detailed structures from all directions for a comprehensive view.
