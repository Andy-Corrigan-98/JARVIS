# Contributing

Welcome to the project! This document outlines how you can contribute and what's currently being worked on.

## Project Status

### Active Development 🚧
Check [features/in-progress/](changelog/features/in-progress/) for features currently being implemented.

### Coming Up 📋
See [features/backlog/](changelog/features/backlog/) for approved features waiting to start.

### Recently Completed ✅
View [features/done/](changelog/features/done/) for completed features.

## How to Contribute

### Getting Started
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow the project's naming conventions:
  - Files: lowercase-with-hyphens.ext
  - Directories: lowercase-with-hyphens/
  - Classes: PascalCase
  - Functions/Methods: camelCase
  - Variables: camelCase
  - Constants: UPPER_SNAKE_CASE
- Adhere to SOLID principles
- Keep It Simple (KISS principle)
- Document your changes appropriately

### Project Structure
```
project-root/
├── src/                    # Source code
├── tests/                  # Test files
├── docs/                   # Documentation
│   ├── technical/         # Technical documentation
│   ├── changelog/         # Version history and changes
│   └── contributing.md    # This file
├── config/                # Configuration files
└── scripts/               # Utility scripts
```

## Feature Development Process

### 1. Proposing New Features 💡
Have an idea? Here's how to propose it:
1. Open an issue with the "feature proposal" template
2. Include:
   - Problem statement
   - Proposed solution
   - Expected benefits
   - Potential challenges
3. Engage in discussion with maintainers and community
4. Refine the proposal based on feedback

### 2. Feature Approval Process
When your idea gains traction:
1. A maintainer will review the proposal
2. If approved:
   - A feature file is created from the template
   - File is placed in `docs/changelog/features/backlog/`
   - The issue is linked to the feature file
3. The feature is now ready for development

### 3. Development Workflow
When working on a feature:
1. **Starting Development**:
   - Move feature file from `backlog/` to `in-progress/`
   - Update the feature's status and timeline
   - Create feature branch from main

2. **During Development**:
   - Keep feature file updated with progress
   - Link related PRs and issues
   - Update technical requirements as needed

3. **Completing Development**:
   - Ensure all success criteria are met
   - Update documentation
   - Submit final PR for review
   - Feature file moves to `done/` after release

### 4. Documentation Requirements
Each feature should maintain:
- Updated feature file with current status
- Technical documentation in `docs/technical/`
- Updated user documentation if applicable
- Migration guides for breaking changes

## Making Changes

### Small Changes
For bug fixes or minor improvements:
1. Create an issue describing the problem
2. Submit a PR with the fix
3. Add entry to next release notes if applicable

### Major Changes
For significant changes:
1. Follow the feature development process
2. Break work into manageable PRs
3. Keep feature file updated with progress
4. Ensure comprehensive documentation

## Getting Help
- Check [technical documentation](technical/README.md) for guides
- Open an issue for questions
- Join project discussions
- Contact maintainers for clarification

## Code of Conduct
- Be respectful and inclusive
- Follow project conventions
- Help others learn and grow
- Give credit where due