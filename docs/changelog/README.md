# Changelog Directory

This directory contains the project's changelog entries and feature tracking system.

## Directory Structure

```
changelog/
├── features/              # Kanban-style feature tracking
│   ├── backlog/          # Approved features not yet started
│   ├── in-progress/      # Features currently in development
│   ├── done/             # Completed features (permanent)
│   ├── archived/         # Dropped or cancelled features
│   └── feature-template.md
└── releases/             # Released versions
    └── MAJOR.MINOR.PATCH.md
```

## Feature Tracking

### Feature Lifecycle
1. **Ideation**: Ideas start in the Contributing guide
2. **Planning**: Approved ideas get a feature file created from `feature-template.md`
3. **Progression**:
   - `backlog/`: Approved features waiting to start
   - `in-progress/`: Features currently being developed
   - `done/`: Completed features (permanent record)
   - `archived/`: Features dropped before completion
4. **Release**: Completed features are referenced in release notes

### Feature States
- Features in `done/` represent a permanent historical record
  - Even if deprecated by newer features, they stay in `done/`
  - Deprecation is noted in release notes and feature file
- Features in `archived/` were dropped before completion
  - Include reason for dropping in feature file
  - May be revived later (move back to backlog)
  - Maintain for historical context

### Feature Files
- Use the `feature-template.md` for new features
- Name format: `feature-name.md` (lowercase, hyphenated)
- Include all relevant details, requirements, and tracking
- Update status and location as feature progresses
- Move file between directories as status changes
- Add archival notes if feature is dropped

### Current Status
To see what's currently being worked on:
1. Check `features/in-progress/` for active development
2. Check `features/backlog/` for upcoming features
3. Check `features/done/` for completed features
4. Review individual feature files for detailed status
5. Check `features/archived/` for historical context

## Release Management

### Creating a Release
When ready to create a release:
1. Review all features in `features/in-progress/`
2. Move completed features to `features/done/`
3. Create a new release file in `releases/` using `template.md`
4. Link to all relevant feature files from the release
5. Update version numbers in completed feature files
6. Commit the release

### Release Notes Format
Each release file should include:
- Version number and date
- Links to completed feature files
- Any breaking changes
- Bug fixes and minor improvements
- Security updates
- Migration instructions (if needed)
- Deprecation notices for existing features

## Current Releases

*Released versions will be listed here when available*

## Examples
- [Automated Testing Framework](features/backlog/automated-testing-framework.md) - Example of a feature in backlog 