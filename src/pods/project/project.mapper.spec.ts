import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import { mapProjectFromApiToVm } from './project.mapper';

describe('map EmployeeSummary From Api To Vm specs', () => {
  it('should return empty array when it feeds undefined', () => {
    // Arrange
    const project: apiModel.Project = undefined;

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual({
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: [],
    });
  });

  it('should return empty array when it feeds null', () => {
    // Arrange
    const project: apiModel.Project = null;

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual({
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: [],
    });
  });

  it('should return empty object when it feeds empty', () => {
    // Arrange
    const project: apiModel.Project = {
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: [],
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual({
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: [],
    });
  });

  it('should return filled object when it feeds with any correct project', () => {
    // Arrange
    const project: apiModel.Project = {
      id: '1',
      name: 'test',
      externalId: '11',
      comments: 'Project Test',
      isActive: true,
      employees: [
        { id: '11', isAssigned: true, employeeName: 'Willy' },
        { id: '12', isAssigned: true, employeeName: 'Elsa' },
      ],
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual({
      id: '1',
      name: 'test',
      externalId: '11',
      comments: 'Project Test',
      isActive: true,
      employees: [
        { id: '11', isAssigned: true, employeeName: 'Willy' },
        { id: '12', isAssigned: true, employeeName: 'Elsa' },
      ],
    });
  });
});
