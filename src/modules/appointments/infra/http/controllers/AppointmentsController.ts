import { Response, Request } from 'express';
import { container } from 'tsyringe';
import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';

export default class AppointmentsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { provider_id, date } = request.body;

    const createAppoitmentService = container.resolve(CreateAppointmentService);

    const appointment = await createAppoitmentService.execute({
      date,
      provider_id,
      user_id,
    });

    return response.json(appointment);
  }
}
