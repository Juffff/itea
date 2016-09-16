import javax.annotation.Resource;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.concurrent.TimeUnit;

public class NoteBook extends TodayData {
    private String name;
    private String phone;
    private Date birthday;
    private Date birthayThisYearDate;

    public NoteBook(String name, String phone, String birthday) throws ParseException {
        this.name = name;
        this.phone = phone;
        this.birthday = new SimpleDateFormat("dd/MM/yyyy").parse(birthday);
        this.birthayThisYearDate = new SimpleDateFormat("dd/MM/yyyy").parse(parseBirthay(birthday));
    }

    private String parseBirthay(String s) {
        String spl[] = s.split("/");
        spl[2] = String.valueOf(Calendar.getInstance().get(Calendar.YEAR));
        String result = "";
        for (int i = 0; i < spl.length; i++) {
            result = result + spl[i] + "/";
        }
        return result.substring(0, result.length() - 1);

    }

    private long daysLived() {
        return TimeUnit.DAYS.convert(getToday().getTime() - birthday.getTime(), TimeUnit.MILLISECONDS);

    }

    public long daysToBirthay() {

        return TimeUnit.DAYS.convert( birthayThisYearDate.getTime() - getToday().getTime(), TimeUnit.MILLISECONDS);
    }


    @Override
    public String toString() {

        return
                "Name:" + name +
                        "\nPhone:" + phone +
                        "\nBirthday:" + new SimpleDateFormat("dd/MM/yyyy").format(birthday) +
                        "\nYears: " + daysLived()/365 +
                        "\nDays to birthay: " + daysToBirthay();
    }


    @AnnotationToInvokeMethod
    public void invokeByReflection(){
        System.out.println("INVOKED");
        System.out.println(new ReflectionUses(this.getClass()).printAnnotatedMethods("AnnotationToInvokeMethod"));
        System.out.println("Bzdyn' - Bzdyn' - Bzdyn'!");

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }
}

