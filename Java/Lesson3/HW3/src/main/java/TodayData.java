import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

class TodayData {
    private Calendar today;

    public TodayData() {

        this.today = Calendar.getInstance();

    }

    public Date getToday() {
        return today.getTime();
    }

    @Override
    public String toString() {
        return new SimpleDateFormat("dd/MM/yyyy").format(getToday());
    }
}
